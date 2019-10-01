import React from 'react';

export default class VistaInvitado extends React.Component{
    render(){
        return(
            <div class="container p-8">
                <div class="col-md-8 mx-auto">
                <form class="form-inline">
                    <div class="form-group">
                        <label>Elige el barrio: </label>
                        <select class="form-control">
                            <option selected>...</option>
                            <option value="1">Versailles</option>
                            <option value="2">Monte Castro</option>
                            <option value="3">Villa Luro</option>
                            <option value="4">Liniers</option>
                        </select>
                    </div>
                        
                    <div class="form-group col-5 mx-auto">
                    <button class="btn btn-primary btn-block" type="submit">Buscar </button>
                    </div>
                </form>
                
                </div>
            </div>
        );
    }
}