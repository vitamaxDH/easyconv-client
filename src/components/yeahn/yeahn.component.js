import React, {useEffect, useMemo, useState} from 'react'
import axios from "axios";
import {useDropzone} from 'react-dropzone';
import {Button, Col, Container, Row} from "react-bootstrap";

const iconv = require('iconv-lite')

const baseStyle = {
};

const activeStyle = {
};

const acceptStyle = {
};

const rejectStyle = {
};

const Yeahn = (props) => {
    const [ greeting, setGreeting ] = useState("서버 연결안됐음");
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

    useEffect(() => {
        axios.get('/yeahn/index')
             .then(({data}) => setGreeting(data));
    }, []);

    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    {greeting}
                    <section className="mt-3" style={baseStyle}>
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />

                        </div>
                    </section>
                    <div className="btn-group">
                        <Button className="btn btn-dark btn-lg">Clear</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Yeahn
