import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ColumnDef } from '@tanstack/react-table';

interface AvatarProps {
    imageUrl?: string;
}
declare const Avatar: React.FC<AvatarProps>;

interface CardProps {
    title: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}
declare const Card: React.FC<CardProps>;

interface GridProps {
    children: React.ReactNode;
}
declare const Grid: React.FC<GridProps>;

interface HeaderProps {
    logoSrc: string;
    title: string;
    subtitle: string;
}
declare const Header: React.FC<HeaderProps>;

interface MenuItem {
    label: string;
    href?: string;
    children?: MenuItem[];
}
interface MenuProps {
    items: MenuItem[];
}
declare const MenuComponent: React.FC<MenuProps>;

interface PillProps {
    label: string;
    color?: "primary" | "dark" | "gray" | "accent";
}
declare const Pill: React.FC<PillProps>;

interface ProgressBarProps {
    value: number;
    color?: string;
}
declare const ProgressBar: React.FC<ProgressBarProps>;

interface SearchProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
    suggestions?: {
        tick: string;
        image?: string;
    }[];
    showHint?: boolean;
    enableAutocomplete?: boolean;
}
declare const SearchComponent: React.FC<SearchProps>;

interface TableProps<T extends object> {
    columns: ColumnDef<T, unknown>[];
    data: T[];
    summaryText?: string;
    subText?: string;
}
declare const Table: <T extends object>({ columns, data, summaryText, subText }: TableProps<T>) => react_jsx_runtime.JSX.Element;

interface TabItem {
    label: string;
    content: React.ReactNode;
}
interface TabsComponentProps {
    tabs: TabItem[];
}
declare const TabsComponent: React.FC<TabsComponentProps>;

interface TitleProps {
    text: string;
}
declare const Title: React.FC<TitleProps>;

interface Token {
    tick: string;
    image?: string;
    price?: string;
    change?: number;
}
interface ListProps {
    title: string;
    icon?: React.ReactNode;
    legend?: string;
    legendRight?: boolean;
    tokens: Token[];
    maxItems?: number;
    showMoreUrl?: string;
}
declare const TokenList: React.FC<ListProps>;

interface WidgetProps {
    value: string;
    icon?: React.ReactNode;
    onClick?: () => void;
}
declare const Widget: React.FC<WidgetProps>;

export { Avatar, Card, Grid, Header, MenuComponent as Menu, Pill, ProgressBar, SearchComponent as Search, Table, TabsComponent as Tabs, Title, TokenList, Widget };
