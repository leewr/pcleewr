import fetch from 'isomorphic-fetch'
export const fetchData = ( ) => ( dispatch ) => {
    fetch('https://www.leewr.com/api/v1/topics')
        .then(response => response.json())
        .then(res => {
            dispatch({type: 'getList', data: res})
        })
}
  