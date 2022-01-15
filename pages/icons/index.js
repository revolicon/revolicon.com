import {
  connectHits,
  RefinementList,
  connectSearchBox,
  InstantSearch,
  Pagination,
  ClearRefinements,
  HierarchicalMenu
} from 'react-instantsearch-dom';
import algoliaSearch from "algoliasearch";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import qs from "qs";

const searchClient = algoliaSearch(
  "9AX8VM1CNZ",
  "9bff375d0ae5b3f9e85709ee7b5e671e"
);

const SearchBoxCustom = connectSearchBox(({ currentRefinement, refine }) => {
  let [query, setQuery] = useState(currentRefinement);
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
      <div className="flex items-center justify-center">
        <ClearRefinements clearsQuery />
      </div>
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
        <div className="w-full rounded-lg bg-white pt-6 px-3 pb-3 flex flex-col justify-center items-center hover:bg-blue-300 transition-all duration-200">
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
    s: style = "",
    p: page,
    c: category,
  } = location;

  return {
    query,
    page: page || 1,
    refinementList: {
      style: style ? encodeURI(style).split(",") : []
    }
  }
}

export default function Icons() {
  const router = useRouter()

  const [searchState, setSearchState] = useState(urlToSearchState(router.query));

  const onSearchStateChange = (url) => {
    let style = url?.refinementList?.style;
    let category = url?.refinementList?.category;
    const query = qs.stringify({
      q: url?.query || null,
      s: (style && style.join(",")) || null,
      p: (url?.page > 1  && url?.page) || null,
      c: (category && category.join(",")) || null
    }, { skipNulls: true });

    router.push({ pathname: "/icons", query }).then(() => {})
   };

  useEffect(() => {
    setSearchState(urlToSearchState(router.query))
  }, [router]);

  return (
    <div className="container pt-24 pb-6">
      <InstantSearch
        indexName="Icon"
        searchClient={searchClient}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
      >
        <SearchBoxCustom router={searchState}/>
        <div className="flex mt-8">
          <div className="w-3/12">
            <div>Style</div>
            <RefinementList attribute="style"/>
            <br/><br/>
            <div>Category</div>
            <RefinementList attribute="category"/>
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
