export default interface IMDBMovieResults {
    searchType: string;
    expression: string;
    results: IMDBMovie[];
}

export interface IMDBMovie {
    id: string;
    resultType: string;
    image: string;
    title: string;
    description: string;
}