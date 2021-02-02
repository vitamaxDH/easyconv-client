import React, {useEffect, useMemo, useState} from 'react'
import axios from "axios";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useDropzone} from 'react-dropzone';
import UploadService from '../../services/upload-files.service'
import OkModal from "../modal/ok.modal.component";
import {Modal} from '../../script/core/constant'
import './main.component.css'

const fileDownload = require('js-file-download')
const iconv = require('iconv-lite')

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const MainComponent = (props) => {
    const [ greeting, setGreeting ] = useState('Server is off');
    const [ serverStatus, setServerStatus ] = useState(false);
    const [ modalShow, setModalShow ] = useState(false);
    const [ modalTitle, setModalTitle ] = useState('');
    const [ modalBody, setModalBody ] = useState('');
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone();

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    useEffect(() => {
        axios.get('/api/index')
             .then(({data}) => {
                 setGreeting(data);
                 setServerStatus(true);
             });
    }, []);

    const sendFiles = () => {
        if (!serverStatus){
            setModalContent(Modal.SERVER_ERROR)
            return ;
        }

        if (acceptedFiles.length === 0){
            setModalContent(Modal.FILE_WARN)
            return;
        }
        console.log (acceptedFiles)
        UploadService.upload(acceptedFiles[0], 0)
            .then(res => {
                console.log(res)
            })
    }

    const setModalContent = (modalType) => {
        setModalShow(true)
        setModalTitle(modalType.title)
        setModalBody(modalType.body)
    }

    const clear = () => {
        acceptedFiles.pop();
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <h2>{greeting}</h2>
                    <section className="mt-3" style={baseStyle}>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <ul>{files}</ul>
                        </aside>
                    </section>
                    <div className="btn-group">
                        <Button className="btn btn-dark btn-lg" onClick={sendFiles}>
                            Convert !
                        </Button>
                        <Button className="btn btn-dark btn-lg" onClick={clear}>Clear</Button>
                    </div>
                    <OkModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        title={modalTitle}
                        body={modalBody}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default MainComponent
