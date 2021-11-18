import { 
        AfterViewInit,
        Component,
        Input,
        OnChanges,
        OnInit,
        ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from 'src/app/core/http/customer.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayedColumns: string[] = ['Customer Id', 'Nombre', 'Apellido', 'Email'];
  customer: Customer[];
  newCliente: Customer[];
  form: FormGroup;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor(
    private fromBuilder: FormBuilder,
    private customerList: CustomerService,
    private router: Router,
    ) {}
  dataSource:  MatTableDataSource<Customer>;
  ngOnInit(): void{
    this.editClient();
    this.getCustomer();
  }
  editClient(): void {
    this.form = this.fromBuilder.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      surname: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(50),
          Validators.minLength(6),
        ],
      ],
    });
  }

  getCustomer() {
    this.customerList.getCustomerListAll().subscribe((result) => {
      console.log(result);
      this.customer = result;
      console.log(this.customer);
      this.dataSource = new MatTableDataSource(this.customer);
      this.dataSource.sort = this.sort;
    });
  }

  
  saveCustomer(): void {
    if (this.form.valid) {
      const customers = this.form.value;
      
      console.log(customers);
      this.createClient(customers);
    } else {
      console.log("Algo salio mal");
    }
  }
  createClient(newCustomer: Customer): void {
    this.customerList.addCustomer(newCustomer).subscribe((client) => {
      console.log(client);
      this.router.navigate(["/", "login"]);
      //this.log(
      //  "¡Su registro se realizo correctamente! ¡Ahora puede iniciar sesión!"
      //);
    });
  }
  

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

