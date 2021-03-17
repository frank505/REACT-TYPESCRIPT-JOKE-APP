import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterFlagsProps from "../../../interfaces/pages/filterjokes/FilterFlagsProps";
import FilterFlags from "../../../pages/filterjokes/FilterFlags";
import * as flags from '../../../mocks/pages/filterjokes/FilterFlags.json'


console.log(typeof flags);

const parseJson:any = flags;

function renderFilterFlags(props: Partial<FilterFlagsProps> = {}) {
  const defaultProps: FilterFlagsProps= {
   flags:{
       flags: parseJson.flags
   }
  };
  return render(<FilterFlags {...defaultProps} {...props} />);
}

describe("<FilterFlags />", () => {

    test("should render component with properties and parent", async () => {
        renderFilterFlags();  
       });

       
    test("should check if root component exist", async () =>
    {
        const {findByTestId} = renderFilterFlags();  
        await findByTestId("filter-flag-test-root-component");
    })
 

   

  });


