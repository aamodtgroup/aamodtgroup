import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  if(data.isBloggArchive) {
    var title = 'Blogg';
  }

  if(data.isProsjekterArchive) {
    var title = 'Prosjekter';
  }

  return (
    <Container>
      {/* Iterate over the items of the list. */}
      <div className="wp-block-section">
        <div className="wp-block-section__inner-container">
          <h2>{title}</h2>
          <div className="ag-grid">
            <>
            {data.items.map(({ type, id }) => {
              const item = state.source[type][id];
              // Render one Item component for each one.
              return <Item key={item.id} item={item} />;
            })}
            </>
          </div>
        </div>
      </div>
      
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
`;