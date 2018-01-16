package com.project.itrack.Category;

import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category,Long> {
    public Category getCategoriesById(Long id);
}
