import { httpClient } from '../http-client'
import { ApiResources } from './api-resources'

export const apiResources = new ApiResources(httpClient)