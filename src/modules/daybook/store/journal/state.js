

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Elit amet dolor pariatur culpa culpa irure do adipisicing labore dolor nulla et excepteur.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Pariatur proident quis sint eiusmod. Velit exercitation ipsum elit consectetur. Aliqua sit sunt aliqua eu esse. Nostrud in nulla tempor cupidatat ullamco excepteur non culpa deserunt tempor. Elit ex aliquip in laborum.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Exercitation exercitation velit dolor eu cillum exercitation. Excepteur culpa laboris nulla proident dolore. Lorem nostrud proident nisi et duis aute commodo reprehenderit commodo. Anim sit id amet nulla incididunt nisi sint Lorem consectetur est.',
            picture: null,
        }
    ]
})