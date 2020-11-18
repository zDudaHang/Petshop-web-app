import React, { useContext } from "react";
import { FaPlus, FaSearch, FaUserPlus } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { DropDownItem } from "./DropDownItem";
import { DropDownMenu } from "./DropDownMenu";
import { NavItem } from "./NavItem";
import AuthContext from "../../AuthContext";
import { Icon } from "bold-ui";

export function AdminNavbar() {

    const {user} = useContext(AuthContext);
    
    return (
        <>
            { user!.isAdmin ?
                <>
                    <NavItem title="Buscar" icon={<FaSearch/>}>
                        <DropDownMenu>
                            <DropDownItem path="/searchPet" leftIcon={<Icon icon='petFilled'/>}> Pet </DropDownItem>
                            <DropDownItem path="/searchCustomer" leftIcon={<Icon icon='userFilled'/>}> Cliente </DropDownItem>
                        </DropDownMenu>
                    </NavItem>
                    <NavItem title="Adicionar" icon={<FaUserPlus/>}>
                        <DropDownMenu>
                            <DropDownItem path="/createUser" leftIcon={<FaPlus/>}> Funcionário </DropDownItem>
                            <DropDownItem path="/createCustomer" leftIcon={<FaPlus/>}> Cliente </DropDownItem>
                        </DropDownMenu>
                    </NavItem>
                    <NavItem path="/users" title="Listar funcionários" icon={<BsPersonLinesFill/>}/>
                    <NavItem path="#" title="Gerar relatório financeiro" icon={<MdAttachMoney/>}/>
                </>
            : null }
        </>
    );
} 