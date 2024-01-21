import { Models } from "appwrite";
import GridPostList from "./GridPostList";
import { searchPosts } from "@/lib/appwrite/api";
import Loader from "./Loader";




type SearchResultProps = {
    isSearchFetching: boolean;
    searchedPosts: Models.Document[];
}


const SearchResults = ({ isSearchFetching, searchedPosts}: SearchResultProps) => {
    
    if(isSearchFetching) return <Loader />

    if(searchPosts && searchedPosts.documents.length > 0){
         return (
        <GridPostList posts={searchPosts.documents} />
    )
         }

  return (
    <p className="text-light-4 mt-10 text-center w-full">No Results Found\</p>
  )
}

export default SearchResults