import {
  connectHits,
  RefinementList,
  connectSearchBox,
  InstantSearch,
  ClearRefinements,
  connectPagination
} from 'react-instantsearch-dom';
import algoliaSearch from "algoliasearch";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import qs from "qs";

const searchClient = algoliaSearch(
  "VQ2YQXLVEB",
  "6cda4f048bd1d4d368801426caf68c19"
);

const Pagination = connectPagination(({ currentRefinement, nbPages, refine }) => (
  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px mx-auto mt-6">
    <button
      onClick={() => refine(currentRefinement - 1)}
      disabled={currentRefinement === 1}
      className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
    >
      Prev
    </button>
    {new Array(nbPages).fill(null).map((_, index) => {
      const page = index + 1;

      return (
        <a
          key={index}
          href="#"
          className={[
            "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
            currentRefinement === page ? "z-10 bg-blue-50 border-blue-500 text-indigo-600" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50",
          ].join(" ")}
          onClick={event => {
            event.preventDefault();
            refine(page);
          }}
        >
          {page}
        </a>
      );
    })}
    <button
      onClick={event => {
        refine(currentRefinement + 1);
      }}
      disabled={currentRefinement === nbPages}
      className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
    >
      Next
    </button>
  </nav>
));
const SearchBox = connectSearchBox(({ currentRefinement, refine }) => {
  let [query, setQuery] = useState(currentRefinement);
  const router = useRouter()

  const updateQuery = (value) => {
    setQuery(value);
    refine(value);
  }
  useEffect(() => {
    setQuery(currentRefinement);
  }, [currentRefinement]);

  return (
    <div className="flex items-center gap-5">
      <label className="w-full h-16 flex items-center space-x-4 border-2 border-neutral-100 rounded-full overflow-hidden bg-neutral-50 px-6 focus-within:border-neutral-200 transition-all duration-300">
        <div className="w-6 h-6 flex flex-none"><i className="re-brands re-search text-2xl leading-none"/></div>
        <input
          value={query}
          onChange={event => updateQuery(event.target.value)}
          className="w-full h-full focus:outline-none outline-none font-medium text-neutral-900 placeholder:text-neutral-400 text-lg flex-1 select-none"
          placeholder="Search 8,023 icons across all categories"
        />
      </label>
      <button
        className="flex items-center justify-center h-[60px] w-[60px] flex-none border-neutral-100 rounded-full overflow-hidden bg-neutral-50 border-2 border-neutral-100 hover:border-neutral-200 transition-all duration-300"
        onClick={() => router.push({ query: {} })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
});
const SearchList = connectHits(({ hits }) => (
  <div className="grid grid-cols-6 gap-4">
    {hits.map((hit, key) => <SearchItem hit={hit} key={key}/>)}
  </div>
));
const SearchItem = ({ hit }) => {
  return (
    <Link href={{ pathname: "/icons/[icon]", query: { s: hit.style, icon: hit.name } }}>
      <a id={`icon-${hit.name}-${hit.style}`} className="cursor-pointer">
        <div className="w-full rounded-lg bg-white pt-6 px-3 pb-3 flex flex-col justify-center items-center hover:bg-blue-50 border border-neutral-200 hover:border-blue-700 transition-all duration-200">
          <i className={[`re-${hit.style} re-${hit.name}`, "text-[32px] h-8"].join(" ")}/>
          <div className="mt-5 text-center text-xs h-7 leading-[14px] line-clamp-2">{hit.name}</div>
        </div>
      </a>
    </Link>
  )
};
const urlToSearchState = (location) => {
  let {
    q: query,
    p: page,
    s: style = "",
    c: categories = "",
  } = location;

  return {
    query,
    page: page || 1,
    refinementList: {
      style: style ? encodeURI(style).split(",") : [],
      categories: categories ? encodeURI(categories).split(",") : []
    }
  }
}

export default function Icons() {
  const router = useRouter()

  const [searchState, setSearchState] = useState(urlToSearchState(router.query));

  const onSearchStateChange = (url) => {
    let style = url?.refinementList?.style;
    let categories = url?.refinementList?.categories;
    const query = qs.stringify({
      q: url?.query || null,
      s: (style && style.join(",")) || null,
      p: (url?.page > 1  && url?.page) || null,
      c: (categories && categories.join(",")) || null
    }, { skipNulls: true });

    router.push({ pathname: "/icons", query }).then(() => {})
   };

  useEffect(() => {
    setSearchState(urlToSearchState(router.query))
  }, [router]);

  return (
    <div className="container pt-24 pb-6">
      <InstantSearch
        indexName="Icons"
        searchClient={searchClient}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
      >
        <SearchBox router={searchState}/>
        <div className="flex mt-8">
          <div className="w-3/12">
            <div>Style</div>
            <RefinementList attribute="style" operator="or"/>
            <br/><br/>
            <div>Category</div>
            <RefinementList attribute="categories" operator="and" limit={1000}/>
          </div>
          <div className="w-9/12 flex flex-col">
            <SearchList/>
            <Pagination padding={5}/>
          </div>
        </div>
      </InstantSearch>
    </div>
  )
}
