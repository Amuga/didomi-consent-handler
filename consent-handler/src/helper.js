export const fetchOverride = () => {

// Mock data for the "consents" path
    const mockConsentsData = {
    status: 'success',
    data: [
        {email: 'John.Doe@cornfield2.com', name: 'John Doe2', selectedProcesses: 'emails'},
        {email: 'John.Doe@cornfield.com', name: 'John Doe', selectedProcesses: 'emails'},
        // Add more mock data as needed
    ],
    };

    // Override the global fetch method with a Proxy
    window.fetch = new Proxy(window.fetch, {
    apply: async function (target, thisArg, argumentsList) {
        const url = argumentsList[0];

        // Check if the URL contains the desired path
        if (url.includes('/consents')) {
        // Intercept the request and return the mock data
        return Promise.resolve({
            json: () => Promise.resolve(mockConsentsData),
        });
        }
        // If the URL does not match, proceed with the actual fetch
        return Reflect.apply(target, thisArg, argumentsList);
    },
    });
}