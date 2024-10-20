import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface SearchFilterProps {
    searchQuery: string;
    statusFilter: string;
    setSearchQuery: (query: string) => void;
    setStatusFilter: (status: string) => void;
}

const SearchFilter = ({ searchQuery, statusFilter, setSearchQuery, setStatusFilter }: SearchFilterProps) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
                label="Search by content"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    label="Status"
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="published">Published</MenuItem>
                    <MenuItem value="draft">Draft</MenuItem>
                    <MenuItem value="archived">Archived</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SearchFilter;