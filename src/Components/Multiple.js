import React, { Component } from 'react';

export default class Multiple extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
        
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        console.log(this.fileObj.length);
        for( let j=this.fileObj.length-1;j < this.fileObj.length;j++){
                  for (let i = 0; i < this.fileObj[j].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[j][i]))
             console.log(this.fileArray);

        }  
        }

console.log(this.fileObj);
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        return (
            <form>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} id={url} alt="..." />
                    ))}
                </div>

                <div className="form-group">
                    <input type="file"  className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
                <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
            </form >
        )
    }
}