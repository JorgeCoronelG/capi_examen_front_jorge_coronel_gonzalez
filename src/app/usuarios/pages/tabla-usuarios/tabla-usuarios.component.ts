import {Component, inject, OnInit, signal} from '@angular/core';
import {UsuarioService} from "../../../services/usuario.service";
import {User} from "../../../interfaces/user";
import {UserDomicilio} from "../../../interfaces/user-domicilio";

@Component({
  standalone: false,
  templateUrl: './tabla-usuarios.component.html',
  styles: ``
})
export class TablaUsuariosComponent implements OnInit {
  public usuarios = signal<User[]>([]);

  public usuarioService = inject(UsuarioService);

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe((usuarios) => {
      this.usuarios.set(usuarios);
    });
  }

  domicilioCompleto(domicilio: UserDomicilio): string {
    return `Calle ${domicilio.domicilio} Num. ${domicilio.numeroExterior}, Col. ${domicilio.colonia},
    CP ${domicilio.cp}, Ciudad ${domicilio.ciudad}`;
  }
}
