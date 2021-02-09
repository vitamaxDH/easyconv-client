import http from "../http-common";

class YeahnService {
    getyeahn(file, getYeahn) {
        let formData = new FormData();

        formData.append("multipartFile", file);

        return http.post("/yeahn/index", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            getYeahn,
        });
    }

}

export default new getYeahnService();
