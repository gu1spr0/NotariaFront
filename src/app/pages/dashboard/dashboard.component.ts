import { Component, OnInit } from '@angular/core';
import { RoleQuery } from '../../models/role/RoleQuery.dto';
import { RolService } from '../../services/rol.service';
import { FilterUtils, MessageService } from 'primeng-lts/api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vRoleQueryDto: RoleQuery;
  vOperacion = true;
  vSelectedElement = false;
  vDisplayDialog = false;
  vColumns: any[];
  vRoleForm: FormGroup;
  constructor(
    private roleService: RolService,
    private messageServie: MessageService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.allRoles();
    this.vColumns = [
      { field: 'id', header: 'ID' },
      { field: 'role', header: 'ROL' },
      { field: 'description', header: 'DESCRIPCION' },
    ];
    FilterUtils['custom'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }
      if (value === undefined || value === null) {
        return false;
      }
      return parseInt(filter) > value;
    };
  }

  private allRoles() {
    this.roleService.getAllRoles().subscribe(
      res => {
        this.vRoleQueryDto = res;
      },
      error => {
        console.log(JSON.stringify(error.error.message));
      }
    );
  }

}
