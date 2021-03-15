const GetParams = {
    isNameSet: () => new URLSearchParams(window.location.search).get('name'),
    isLocationSet: () => new URLSearchParams(window.location.search).get('location') === 'true',
}

export default GetParams;
