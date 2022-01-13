import { InstantSearch, connectSearchBox, connectHits, Pagination, VoiceSearch } from 'react-instantsearch-dom';
import algoliaSearch from "algoliasearch";
import Link from "next/link";

const searchClient = algoliaSearch(
  "9AX8VM1CNZ",
  "9bff375d0ae5b3f9e85709ee7b5e671e"
);

const SearchBox = connectSearchBox(({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate action="" role="search" className="flex items-center gap-5">
    <label className="w-full h-16 flex items-center space-x-4 border-2 border-neutral-100 rounded-full overflow-hidden bg-neutral-50 px-6 focus-within:border-neutral-200 transition-all duration-300">
      <div className="w-6 h-6 flex flex-none"><i className="re-brands re-search text-2xl leading-none"/></div>
      <input
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        className="w-full h-full focus:outline-none outline-none font-medium text-neutral-900 placeholder:text-neutral-400 text-lg flex-1 select-none"
        placeholder="Search 8,023 icons across all categories"
      />
    </label>
    <button className="flex items-center justify-center h-[60px] gap-3 text-neutral-50 py-3 px-10 rounded-full font-medium select-none bg-blue-700 flex-none" onClick={() => refine('')}>Reset query</button>
  </form>
));

const SearchList = connectHits(({ hits }) => (
  <div className="grid grid-cols-8 gap-4 mt-8">
    {hits.map((hit, key) => <SearchItem hit={hit} key={key}/>)}
  </div>
));
const SearchItem = ({ hit }) => {
  return (
    <Link href={{ pathname: "/icons/[icon]", query: { s: hit.style, icon: hit.name } }}>
      <a id={`icon-${hit.name}-${hit.style}`} className="cursor-pointer">
        <div className="w-full rounded-lg bg-white pt-6 px-3 pb-3 flex flex-col justify-center items-center">
          <i className={[`re-${hit.style} re-${hit.name}`, "text-[32px] h-8"].join(" ")}/>
          <div className="mt-5 text-center text-xs h-7 leading-[14px] line-clamp-2">{hit.name}</div>
        </div>
      </a>
    </Link>
  )
};

function Search() {
  return (
    <InstantSearch
      indexName="Icon"
      searchClient={searchClient}
    >
      <SearchBox/>
      <SearchList/>
      <Pagination padding={5} />
    </InstantSearch>
  )
}

export default function Icons(props) {
  return (
    <div className="container pt-24 pb-6">
      <Search/>
    </div>
  )
}
