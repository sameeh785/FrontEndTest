import React, { FC, ReactElement } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
const Header: FC = ({/* destructured props */}): ReactElement => { 
  return <HeaderStyle>
      <List>
          <li> <Link to="/" >List Task </Link></li>
          <li> <Link to="/create/task" >Create Task </Link></li>
          <li><Link to="/delete/task" >Delete Task </Link></li>

      </List>
  </HeaderStyle>
};
export default Header

const HeaderStyle = styled.div`
width: 100%;
height : 60px;
background-color : black;
color : white
`;

const List = styled.ul`
list-style-type : none;
margin-right : 1rem;
float : right;
& li {
    display : inline;
    cursor : pointer;
    padding-left : 1rem
}
& li a {
    text-decoration : none;
    color : white
}

`;