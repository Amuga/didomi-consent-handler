
// Mock data for the "consents" path
const mockConsentsData = {
  status: 'success',
  data: [
      {email: 'Dolly.Parton@jolene.com', name: 'Dolly Parton', selectedProcesses: 'Newsletter'},
      {email: 'Julian.Assange@somewherehidden.com', name: 'Not Julian Assange', selectedProcesses: 'Anonymous Stats'},
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
            json: () => Promise.resolve(mockConsentsData.data),
        });
        }
        // If the URL does not match, proceed with the actual fetch
        return Reflect.apply(target, thisArg, argumentsList);
    },
  });


// STATE CREATION

  export const FetchAppData = async () => {

      const response = await fetch('/consents')
      const data  = await response.json()
      return data
    
  }