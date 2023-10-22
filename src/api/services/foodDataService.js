// Services/FoodDataService.js

const axios = require('axios');

class FoodDataService {
    constructor() {
        this.baseUrl = 'https://api.nal.usda.gov/fdc/v1/foods';
        this.apiKey = 'DEMO_KEY';  // Replace with your actual API key
    }

    async searchFood(query, brandOwner) {
        try {
            const response = await axios.get(`${this.baseUrl}/search`, {
                params: {
                    query: query,
                    dataType: 'Branded',
                    pageSize: 25,
                    pageNumber: 1,
                    sortBy: 'dataType.keyword',
                    sortOrder: 'asc',
                    brandOwner: brandOwner,
                    api_key: this.apiKey
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error calling the API:', error.response.data);
            throw new Error('Error fetching data from USDA API.');
        }
    }
}

module.exports = FoodDataService;
