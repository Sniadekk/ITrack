package com.project.itrack.Category;

import com.project.itrack.Item.Item;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category,Long> {
    public Category getCategoriesById(Long id);

}
