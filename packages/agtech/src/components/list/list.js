import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Link from "../link";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  const category = state.source.category

  if(data.isBloggArchive) {
    var title = 'Blogg';
  } else if(data.isProsjekterArchive) {
    var title = 'Prosjekter';
  } else if(data.isTaxonomy) {
    var title = decode(state.source[data.taxonomy][data.id].name)
  } else {
    var title = '';
  }

  return (
    <Container>
      <div className="wp-block-section">
        <div className="wp-block-section__inner-container">
          <h2>{title}</h2>
          { ( data.isBloggArchive || data.isCategory ) &&
            <div className="category-list">
              <Link link="/blogg/" className="category-button">Alle</Link>
              <Link link="/kategori/frontity/" className="category-button">Frontity</Link>
              <Link link="/kategori/wordpress/" className="category-button">WordPress</Link>
              <Link link="/kategori/design/" className="category-button">Design</Link>
            </div>
          }
          <div className="ag-grid">
            {/* Iterate over the items of the list. */}
            {data.items.map(({ type, id }) => {
              const item = state.source[type][id];
              return <Item key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  .category-list {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
  }

  .category-button {
    padding: 10px 30px;
    border: 2px solid var(--text);
    border-radius: 8px;
    color: var(--text);
  }
`;