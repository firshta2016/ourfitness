import React from "react";
import styled from "styled-components";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
export const Rules = () => {
  return (
    <StyledWrapper>
      <div className="container-fluid rules">
        <div className="row">
          <div className="col-md-12">
            <h1>getfit Rules</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              dictum semper ligula non mollis. Aliquam et pharetra elit.
              Praesent eu commodo felis. Suspendisse blandit lectus quis odio
              aliquam, quis laoreet nulla condimentum. Cras gravida urna at est
              tincidunt, et porta dui sodales. Fusce sed nunc vel nibh pharetra
              interdum.
            </p>
            <p>
              Cras maximus est in libero euismod, eu congue nibh volutpat. Duis
              aliquet id mauris at pulvinar. Vestibulum fringilla ipsum sed
              libero porttitor, eu bibendum nulla luctus. Donec sed lobortis
              felis. Pellentesque eu bibendum purus, sollicitudin tincidunt
              purus. Etiam aliquam dui nec nisl luctus, sed sodales arcu
              laoreet.{" "}
            </p>
            <p>
              Aliquam scelerisque bibendum lorem, id vulputate mauris dictum a.
              Aenean a augue ex. Aenean dolor massa, sagittis nec dolor
              venenatis, rhoncus suscipit libero. Maecenas a nunc efficitur,
              cursus purus at, eleifend ipsum. Donec finibus id justo sed
              cursus. Suspendisse molestie, libero nec ultricies hendrerit,
              massa erat consequat justo, id eleifend ante magna non turpis.
              Mauris auctor sem non eleifend dapibus. Curabitur elementum ipsum
              in scelerisque porttitor. Donec eu odio tortor.
            </p>
            <p>
              Phasellus a lectus nibh. Aliquam efficitur ligula eu vestibulum
              cursus. Ut imperdiet, magna vel sodales elementum, est erat
              malesuada metus, in fringilla quam leo et erat. Praesent mauris
              magna, ornare non suscipit vehicula, sagittis tempus velit. Donec
              id mauris congue, pulvinar tellus quis, tempor mauris. Donec id
              felis ut augue aliquet ullamcorper. Cras et urna porttitor metus
              dapibus efficitur eget a dui. Vivamus congue lacus ac bibendum
              egestas. Aenean mollis lacus eget diam blandit, non auctor diam
              suscipit. Donec sed est scelerisque, iaculis dolor id, scelerisque
              odio. Fusce eleifend luctus nulla eu sodales. Pellentesque
              fringilla tempus auctor.
            </p>
            <p>
              Fusce sed velit dui. Praesent ut odio nisi. Nunc ultrices erat ac
              venenatis efficitur. Pellentesque venenatis, justo ac feugiat
              iaculis, turpis nisl egestas lorem, in ultrices sem nibh blandit
              libero. Praesent non orci eu nisl porttitor blandit. Phasellus
              porttitor rutrum nulla et condimentum. Maecenas congue fermentum
              dui. Mauris feugiat tincidunt lectus, mollis cursus ante eleifend
              sit amet. Sed cursus at augue vel euismod. Suspendisse tristique
              eget ipsum sed lacinia. Aliquam ut sapien non mauris fringilla
              hendrerit sit amet ut dui. Cras imperdiet convallis quam nec
              auctor. Pellentesque feugiat turpis a blandit efficitur.
            </p>
            <p>
              Sed ut fermentum quam. Praesent non augue vitae sapien pharetra
              vehicula ut eu elit. Donec fringilla, tellus non imperdiet
              placerat, erat ligula facilisis mi, volutpat faucibus quam nisi id
              ipsum. Ut condimentum rutrum dolor, et venenatis dolor auctor in.
              Donec id felis eget quam auctor blandit. Phasellus quis tristique
              elit. Maecenas pretium ex tellus, in viverra est dictum quis.
              Mauris lacinia non ex vitae gravida. Curabitur commodo tempor quam
              et finibus. Donec fermentum tempor elit, a pellentesque ex
              interdum in.
            </p>
            <p>
              Ut consectetur libero ipsum, sit amet mollis nibh suscipit
              finibus. Mauris maximus magna ut nulla placerat viverra. Proin
              dignissim tristique risus, congue facilisis nisi dapibus quis.
              Curabitur blandit, justo ac tristique porta, leo lectus interdum
              urna, sit amet rutrum ex diam vel risus. Duis mauris lacus, congue
              eget enim facilisis, euismod venenatis nisi. Curabitur consectetur
              interdum turpis, pretium accumsan lectus. Phasellus luctus pretium
              massa, et malesuada nulla sollicitudin sit amet.
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .rules {
    padding: 10% 20% 10% 20%;
    background-color: #eff5f7;
  }
`;
