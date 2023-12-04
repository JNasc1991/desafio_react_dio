import React from 'react';
import {ItemContainer} from "./style";

function ItemRepo({repository, removeRepo, repoIndex}) {
    return (
      <ItemContainer>
          <h3>
              {repository.name}
          </h3>
          <p>
              {repository.full_name}
          </p>
          <a className={""} href={repository.html_url} target={"_blank"} >Ver repositório</a> <br/>
          <a className={"remove"} href={"#"} rel={"noreferrer"} onClick={() => {
              removeRepo(repoIndex)}

          } >Remover</a>
          <hr/>
      </ItemContainer>
    );
}

export default ItemRepo;