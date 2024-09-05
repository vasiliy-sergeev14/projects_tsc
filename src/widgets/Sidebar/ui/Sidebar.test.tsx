import {render, screen} from "@testing-library/react"
import { Sidebar } from "widgets/Sidebar/ui/Sidebar";

describe("Sidebar", ()=> {
    test('test', () => {
        render(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        screen.debug();
    });
})