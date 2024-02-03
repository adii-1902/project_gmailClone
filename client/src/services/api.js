import axios from 'axios';

const API_URI = ''

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    const { params, urlParams, ...body } = requestData;

    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}/${type}`,
        data: requestData
    })
}

export default API_GMAIL;




// import axios from 'axios';

// const API_URL = 'http://localhost:8000';

// const API_GMAIL = async (urlObject, payload, type) => {
//     return await axios({
//         method: urlObject.method,
//         url: `${API_URL}/${urlObject.endpoint}/${type}`,
//         data: payload
//     })
//     // try {
//     //     console.log("Data:", payload);
//     //     // console.lo
//     //     const response = await axios({
//     //         method: urlObject.method,
//     //         url: `${API_URL}/${urlObject.endpoint}`,
//     //         data: payload
//     //     });
//     // const response = await axios.post('http://localhost:8000/gmail/save', payload);
//     // console.log("Frontend:", response.data.data);

//     // Check the response status and handle accordingly
//     // if (response.status === 200) {
//     //     console.log('Data stored successfully:', response.data);
//     // } else {
//     //     console.error('Error storing data. Server response:', response);
//     // }

//     // return response.data;
//     // } catch (error) {
//     //     // Handle any errors during the axios request
//     //     console.error('Error during API request:', error);
//     //     throw error; // Re-throw the error for further handling if needed
//     // }
// };

// export default API_GMAIL;


