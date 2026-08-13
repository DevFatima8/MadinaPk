import { createContext } from 'react';
import type { contextType } from '../../types/context';

const TransportContext = createContext<contextType | null>(null);
export default TransportContext;