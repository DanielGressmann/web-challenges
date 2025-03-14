import { isStyledComponent } from "styled-components";
import styled from "styled-components";

// export default function BoxWithStyledComponents({ isBlack }) {

//     return (
//       <div
//         className={`box-with-classname${
//           isBlack ? " box-with-classname--black" : ""
//         }
//         `}
//       ></div>
//     );
//   }

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
