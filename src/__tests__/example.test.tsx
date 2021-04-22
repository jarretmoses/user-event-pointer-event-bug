import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ComponentWithoutParent, ComponentWithParent } from "../components";

/**
 * This bug is occuring when a parent has an inline style set to
 * 'pointer-events: none' but then its child has 'pointer-events: auto'
 * set but it is set in a css file (not inline)
 */
describe('Pointer event bug', () => {
  let onClick: () => void;

  beforeEach(() => {
    onClick = jest.fn()
  });

  it('should not error when clicking element with pointer events set to auto (no parent)', () => {
    const { getByText } =  render(
      <ComponentWithoutParent onClick={onClick} />
    )

    userEvent.click(getByText('Click me'))

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not error when clicking element with pointer events set to auto (with parent)', () => {
    const {
      getByText,
    } =  render(
      <ComponentWithParent onClick={onClick} />
    )

    userEvent.click(getByText('Click me'))

    expect(onClick).toHaveBeenCalledTimes(1);
  });
})
