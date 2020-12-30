import {httpClient} from "./http-client";
import {ProductService} from "./productService";

export const services = {
    productService: new ProductService(httpClient)
}

export const useServices = () => {
    return services;
}

// створили хук useServices()
