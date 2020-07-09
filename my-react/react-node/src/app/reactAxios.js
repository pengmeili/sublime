import React, {useState, useEffect, useCallback} from "react";
import axios from 'axios'

function SearchResult() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('react');

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const result = await axios('https://hn.algolia.com/api/v1/search?query='+query);
      if(!ignore) setData(result.data)
    }
    fetchData();
    return () => { ignore = true; }
  }, [query])

  return (
    <>
      <input value={ query } onChange={ e => setQuery(e.target.value) } />
      <ul>
        {
          data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))
        }
      </ul>
      <MeasureExample />
    </>
  )
}

// 测量DOM节点
// function MeasureExample() {
//   const [height, setHeight] = useState(0);
//
//   const measuredRef = useCallback(node => {
//     if(node !== null){
//       setHeight(node.getBoundingClientRect().height);
//     }
//   }, [])
//
//   return(
//     <>
//       <h1 ref={ measuredRef }>Hello world!</h1>
//       <h2>The above header is { Math.round(height) }px tall.</h2>
//     </>
//   )
// }

// 抽离逻辑
function MeasureExample() {
  const [ rect, ref ] = useClientRect();
  console.log(ref)
  return(
    <>
      <h1 ref={ref}>Hello, World!</h1>
      {
        rect !== null &&
          <h2>The above header is { Math.round(rect.height) }px tall.</h2>
      }
    </>
  )
}

function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if(node !== null){
      setRect(node.getBoundingClientRect())
    }
  },[])
  return [rect, ref]
}

export default SearchResult;

