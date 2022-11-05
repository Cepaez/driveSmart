import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
import {Cliente, Administrador, Asesor} from '../models';
import { Llaves } from '../config/llaves';

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}


  // Generar una clave de 8 caracteres
  GenerarClave(){
    let clave = generador(8, false);
    return clave;
  }

  // Cifra una clave utilizando MD5
  CifrarClave(clave: string){
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  // Autenticacion

  GenerarTokenCliente( cliente: Cliente ){
    let token = jwt.sign(
      {
        data: {
          id: cliente.id,
          correo: cliente.correo,
          nombre: cliente.nombre + " " + cliente.apellido,
          rol: "cliente"
        }
      }, Llaves.claveJWT
    );
  }

  GenerarTokenAdministrador( cliente: Administrador ){
    let token = jwt.sign(
      {
        data: {
          id: cliente.id,
          correo: cliente.correo,
          nombre: cliente.nombre + " " + cliente.apellido,
          rol: "administrador"
        }
      }, Llaves.claveJWT
    );
  }

  GenerarTokenAsesor( cliente: Asesor ){
    let token = jwt.sign(
      {
        data: {
          id: cliente.id,
          correo: cliente.correo,
          nombre: cliente.nombre + " " + cliente.apellido,
          rol: "asesor"
        }
      }, Llaves.claveJWT
    );
  }

  /*
   * Add service methods here
   */
}
