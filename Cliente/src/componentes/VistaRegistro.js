import React from 'react';

export default class VistaRegistro extends React.Component{
    render(){
        return(
            <div class="container p-4">
                <div class="col-md-8 mx-auto">
                <form action=" ../Servidor/alta" method="POST" class="form-inline">
                    <div class="form-group col-5">
                        <label>Nombre:</label>
                        <input name="nombre" class="form-control" placeholder="Ingresa tu nombre.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Apellido:</label>
                        <input name="apellido" class="form-control" placeholder="Ingresa tu apellido.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Correo electrónico:</label>
                        <input name="correo" class="form-control" placeholder="Ingresa tu correo.." type="email" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Número telefónico:</label>
                        <input class="form-control" placeholder="Ingresa tu numero.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Domicilio:</label>
                        <input name="domic" class="form-control" placeholder="Ingresa tu direccion.." type="text" required></input>
                    </div>
                    <div class="form-group col-5">
                        <label>Elige tu barrio:</label>
                        <select name="barrio" class="form-control">
                            <option selected>...</option>
                            <option value="1">Versailles</option>
                            <option value="2">Monte Castro</option>
                            <option value="3">Villa Luro</option>
                            <option value="4">Liniers</option>
                        </select>
                    </div>
                    <label>Seleccione el sexo:</label><br/>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="M" name="rsexo" class="custom-control-input"></input>
                        <label class="custom-control-label" for="M">Masculino</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="F"name="rsexo" class="custom-control-input"></input>
                        <label class="custom-control-label" for="F">Femenino</label>
                    </div>
                    <div class="form-group col-5">
                        <label>Crear usuario:</label>
                        <input name="user" class="form-control" placeholder="Ingrese usuario.." type="text" required></input>
                    </div>
                    
                    <div class="form-group col-5">
                        <label>Crear contraseña: </label>
                        <input name="pw" class="form-control" placeholder="Ingrese contraseña.." type="password" required></input>
                        
                    </div>
                    
                    <div class="form-group col-4 mx-auto">
                    <button name="submit" class="btn btn-primary btn-block" type="submit">Registrarse</button>
                    </div>
                    <p>* Una vez creada la cuenta usted recibirá un correo para validar la misma siguiendo el link recibido.</p>
                </form>
                </div>
            </div>
        );
    }
}