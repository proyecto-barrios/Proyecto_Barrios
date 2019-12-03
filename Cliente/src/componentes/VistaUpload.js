import React from 'react';

export default class VistaUpload extends React.Component{
    enviar = () => {
        this.props.history.push("/")
    }
    render(){
        return(
            //class="input group animated wobble"></div>
            <div class="container p-4">
              <div className= "row">
                <div className ="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-body">
                            <form action="" method="POST" encType="multipart/form-data">
                                <div className="form-group">
                                    <input type="text" name="texto" placeholder="Texto" className="form-control"></input>
                                </div>
                                
                                <div className="input-group mb-3">
                                <div className="custom-file">
                                  <input type="file" name="imagen" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"></input>
                                  <label className="custom-file-label" for="inputGroupFile03">Elegir archivo</label>
                               </div>
                                </div>

                                <div class="form-group">
                                   <input type="text" name="fk_user" class="form-control" placeholder="usuario"></input>
                                </div>
                                <div class="form-group">
                                   <button type="submit" name="submitI" class="btn btn-success btn-block">Postear</button>
                                 </div>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}