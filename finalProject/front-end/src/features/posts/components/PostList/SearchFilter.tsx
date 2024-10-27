import { Box, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface SearchFilterProps {
    searchQuery: string;
    statusFilter: string;
    setSearchQuery: (query: string) => void;
    setStatusFilter: (status: string) => void;
}

const SearchFilter = ({ searchQuery, statusFilter, setSearchQuery, setStatusFilter }: SearchFilterProps) => {
    return (
        <Box className="search-container">
            <TextField
                label="Search by content"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
            
            <FormControl fullWidth className="custom-form-control">
                <InputLabel>Status</InputLabel>
                <Select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    label="Status"
                    className="custom-select"
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="published">Published</MenuItem>
                    <MenuItem value="draft">Draft</MenuItem>
                    <MenuItem value="archived">Archived</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth className="custom-form-control">
                <InputLabel>Platform</InputLabel>
                <Select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    label="Status"
                    className="custom-select"
                >
                    <MenuItem value="">Linked In</MenuItem>
                    <MenuItem value="published">Facebook</MenuItem>
                    <MenuItem value="draft">Instagram</MenuItem>
                    <MenuItem value="archived">Google</MenuItem>
                </Select>
            </FormControl>

        </Box>
    );
};

export default SearchFilter;