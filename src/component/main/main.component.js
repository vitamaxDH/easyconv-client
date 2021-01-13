import React, {useEffect, useState, useMemo} from 'react'
import axios from "axios";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useDropzone} from 'react-dropzone';
import UploadService from '../../services/upload-files.service'

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
    const [ greeting, setGreeting ] = useState("hasn't answered yet");
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
             .then(({data}) => setGreeting(data));
    }, []);

    const sendFiles = () => {
        console.log (acceptedFiles)
        UploadService.upload(acceptedFiles[0], 0)
            .then(res => {
                console.log(res)
            })

    }

    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    {greeting}
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
                    <Button className="mt-3" onClick={sendFiles}>
                        변환하기
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default MainComponent
