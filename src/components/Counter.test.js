import Counter from "./Counter"
import { fireEvent, render, screen } from '@testing-library/react';

test("should display the heading", ()=> {
    render(<Counter/>)
    // Extracting the heading from the screen using getByText
    const heading = screen.getByText("M2P Counter App");
    // Checking if it is visible
    expect(heading).toBeVisible();
})

test("should have a initial value of 0 when nothing is passed as parameter by the user",()=>{
    render(<Counter/>)
    // Extracting the count from screen which has to be zero
    // queryByText is similar to getByText except it returns null if match is not found
    const count = screen.queryByText(0);
    //checking if it is visible in the screen
    expect(count).toBeVisible();
})


test("should have a initial value of 4 when 4 is passed as initial value by user",() => {
    render(<Counter initialValue = {4} />);
    const count = screen.queryByText(4);
    expect(count).toBeVisible();
})


// Now Lets write test cases for increment and decrement operations


// Increment

test("should increment the count by one upon clicking the add button once", () => {
    render(<Counter initialValue={2}/>)
    // Checking if there is a button named Add
    const addButton = screen.getByText("Add");
    // Firing a Click Event 
    fireEvent.click(addButton);
    // We Expect a count of 3 after the click Event when initial value was 2
    const count = screen.queryByText(3);
    expect(count).toBeVisible();
})

test("should increment the count by two upon clicking the add button twice", () => {
    render(<Counter initialValue={2}/>)
    // Checking if there is a button named Add
    const addButton = screen.getByText("Add");
    // Firing a Double Click Event 
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    // We Expect a count of 7 after the dblclick Event when initial value was 5
    const count = screen.queryByText(4);
    expect(count).toBeVisible();
})


//Decrement


test("should decrement the count by one upon clicking the sub button once", () => {
    render(<Counter initialValue={2}/>)
    // Checking if there is a button named Sub
    const subButton = screen.getByText("Sub");
    // Firing a Click Event 
    fireEvent.click(subButton);
    // We Expect a count of 1 after the click Event when initial value was 2
    const count = screen.queryByText(1);
    expect(count).toBeVisible();
})

test("should increment the count by two upon clicking the sub button twice", () => {
    render(<Counter initialValue={2}/>)
    // Checking if there is a button named Add
    const subButton = screen.getByText("Sub");
    // Firing a Double Click Event 
    fireEvent.click(subButton);
    fireEvent.click(subButton);
    // We Expect a count of 0 after the dblclick Event when initial value was 2
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
})

// test case for handling negative numbers

test("should not deal with negative numbers",()=>{
    render(<Counter initialValue={-2}/>)
    const errorMessage = screen.getByText("Not allowed");
    expect(errorMessage).toBeVisible();
})

