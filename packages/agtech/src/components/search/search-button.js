import { connect, styled } from 'frontity';
import { SearchIcon } from '../icons';
import { BaseToggle, LabeledIcon, ToggleWrapper } from './nav-toggle';

const SearchButton = ({ state, actions }) => {
    // Get the state of the search modal
    const { isSearchModalOpen } = state.theme;
    const { openSearchModal } = actions.theme;

    return (
        <HeaderToggle>
            <ToggleWrapper>
                <BaseToggle
                    aria-expanded={isSearchModalOpen}
                    onClick={openSearchModal}
                    aria-label="Click to open search bar..."
                    style={{ bottom: '0.5rem' }}
                >
                    <LabeledIcon icon={SearchIcon} />
                </BaseToggle>
            </ToggleWrapper>
        </HeaderToggle>
    );
};

export default connect(SearchButton);

const HeaderToggle = styled.div`
    display: flex;
    height: auto;
    width: auto;
    z-index: 5;
`;
