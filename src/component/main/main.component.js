import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import {useDropzone} from "react-dropzone";

const MainComponent = (props) => {
    const [ greeting, setGreeting] = useState("hasn't answered yet");
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    useEffect(() => {
        axios.get('/api/index')
            .then(({data}) => setGreeting(data));
    }, []);

    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    {greeting}
                    <section>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        <aside>
                            <h4>Files</h4>
                            <ul>{files}</ul>
                        </aside>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default MainComponent
