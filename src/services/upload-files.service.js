import http from "../http-common";

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("multipartFile", file);

        return http.post("/api/convert", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getFiles(fileId) {
        return http.get(`/api/file/${fileId}`, {
            headers: {
                'responseType': 'arraybuffer',
            }
        });
    }

}

export default new UploadFilesService();
