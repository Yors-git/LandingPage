import { colors, fonts } from '../../styles';
import styled from 'styled-components';

export interface IGenericListProps {
	listItems: string[];
  title?: string;
  order?: number;
}

const ListContainer = styled.div<{order?: number}>`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    order: ${({ order }) => order || 0};
  }
`;

const ListTitle = styled.h5`
  ${fonts.secondary600};
  font-size: 25px;
  color: ${colors.darkBrown};
  margin: 0 0 16px;
  @media (max-width: 576px) {
    color: ${colors.darkGrey};
    margin: 40px 0 4px;
  }
`;

const List = styled.ul`
	display: flex;
  flex-direction: column;
  justify-content: start;
	list-style-type: none;
	padding: 0;
	margin: 0; 
  ${fonts.secondary400};
  font-size: 18px;
  color: ${colors.opaqueBrown};
  @media (max-width: 576px) {
		justify-content: space-around;
		flex-direction: column;
	}
`;

const GenericLi = styled.li`
	margin: 6px 0;
	@media (max-width: 576px) {
	}
`;

const GenericList: React.FC<IGenericListProps> = ({ listItems, title, order }) => {
	return (
    <ListContainer order={order}>
      {title && <ListTitle>{title}</ListTitle>}
      <List>
        {listItems.map(li => {
          return <GenericLi>{li}</GenericLi>;
        })}
      </List>
    </ListContainer>
	);
};

export default GenericList;
