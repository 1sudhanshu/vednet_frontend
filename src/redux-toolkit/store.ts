import { configureStore } from "@reduxjs/toolkit";
import { BookMarkReducer } from './reducers/BookMarkReducer';
import { ContactReducer } from './reducers/ContactReducer';
import { EmailReducer } from './reducers/EmailReducer';
import { TaskReducer } from './reducers/TaskReducer';
import { ChatReducer } from './reducers/ChatReducer';
import { ThemeCustomizer } from './reducers/ThemeCustomizer';
import { FilterReducer } from './reducers/Ecommerce/FilterReducer';
import { ProductReducer } from './reducers/Ecommerce/ProductReducer';
import { CartReducer } from './reducers/Ecommerce/CartReducer';
import { TodoReducer } from './reducers/TodoReducer';
import { StickyReducer } from './reducers/StickyReducer';
import { TableDataReducer } from './reducers/TableDataReducer';

export const store = configureStore({
    reducer: {
        BookMarkReducer,
        ContactReducer,
        TaskReducer,
        EmailReducer,
        ChatReducer,
        FilterReducer,
        ProductReducer,
        CartReducer,
        TodoReducer,
        ThemeCustomizer,
        StickyReducer,
        TableDataReducer
    },
})