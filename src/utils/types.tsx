export interface tableProps {
posts: any;
setdata : (data:any) => void;
rowperpage: (Number:number)=> void;
}

export interface paginationProps{
postsPerPage: number;
totalPages: number;
activePage: (Number:number) => void;
currentpage: number;

}