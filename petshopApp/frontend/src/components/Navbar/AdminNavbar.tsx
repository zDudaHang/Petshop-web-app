import React, { useContext } from "react";
import { FaPlus, FaSearch, FaUserPlus } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { DropDownItem } from "./DropDownItem";
import { DropDownMenu } from "./DropDownMenu";
import { NavItem } from "./NavItem";
import AuthContext from "../../AuthContext";

export function AdminNavbar() {

    const context = useContext(AuthContext);
    
    return (
        <>
            {(context.isLoggedIn && context?.user?.isAdmin) ?
                <>
                    <NavItem title="Buscar" path="/search" icon={<FaSearch/>}/>
                    <NavItem title="Adicionar" icon={<FaUserPlus/>}>
                        <DropDownMenu>
                            <DropDownItem path="#" leftIcon={<FaPlus/>}> Funcionário </DropDownItem>
                            <DropDownItem path="/createCustomer" leftIcon={<FaPlus/>}> Cliente </DropDownItem>
                        </DropDownMenu>
                    </NavItem>
                    <NavItem path="#" title="Listar funcionários" icon={<BsPersonLinesFill/>}/>
                    <NavItem path="#" title="Gerar relatório financeiro" icon={<MdAttachMoney/>}/>
                </>
            : null }
        </>
    );
} 