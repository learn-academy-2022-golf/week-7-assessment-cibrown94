# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Taking place here in this code is 

# BlogPostController is the controller. The controller is a logical center of an application. It will organize the communication between the user, views, and the model. A controller is made using $rails g controller (Controllername). In the next line, there is a def method with the name index. Index means to send back the entire list of data available for the model being queried. So the method's name is index, and index has a defintion. 



class BlogPostsController < ApplicationController
  def index


    # ---2)

# There is an instance variable named post is making an Active Record call on all of the BlogPost content and saving it in the post instance variable. 

    @posts = BlogPost.all
  end

  # ---3)

# This is a method called show, that will display one item, by accessing it with a param id, after the variable instance of post. This will allow us to access an id inside of the item, and display/show it. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)

  # This is a method called new. New will allow users to add information into our web site, and store the information into the database. Create will allow the user to take data and add to it, to be in the database, creating a new instance. 

  def new
    @post = BlogPost.new
  end

  def create


    # ---5)

# The instance of post which is BlogPost.all is allowing the users to create an instance whenever the user making a new entry under the blog_post_params in the Active Record. If the post meets all of the parameters, (being a strong param, meaning this will dictate the attributes allowed, so if all of the necessary items are met and deemed valid, than this will happen, which is essentially a conditional statement),than it will redirect to the _path. The path can link to another website, home screen, or confirmation screen,, etc. 

# Than there is a def edit. Edit will be sends overs HTML forms, which will allow user to fill it out and send ouuut overwrite into a database. 

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
   
    # ---6)
 
# Here we are again using the post instance, using the .find after BlogPost to find one item by its id. Since this is under the def edit, it is used to edit an existing model object. 

    @post = BlogPost.find(params[:id])
  end

# Update just like edit will be updating a model class using the param id. 

  def update
    @post = BlogPost.find(params[:id])


    # ---7)

    # Here will be updating/editing a a blog post update using a conditional statement that will trigger a redirect if the new entry is made correctly. If correct it will redirect to the attached link path. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  #  Here def destroy is looking for a param with a certain id. If the param meets the params id, than destroy it. 

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)

      # After looking through the Blog post, for a param: id a conditional statement was put in that if located, destroy the post from the database and redirect to a new link path. 
      redirect_to blog_posts_path
    end
  end

  # ---9)

  # Using the private keyword restricts the scope of where a method can be called. Private is listed to a controller class, so that there is no chance that it can be called from somewhere else in the program. One private is set, everything under it is protected. So def blog_post_params is protected.
  
  private
  def blog_post_params


    # ---10)

    # Still under private. The require method makes sure that a specific parameter is provided, if it is not provided than it will display an error. So it requires a blog post. The permit method will return the params title, content, filtered.
    params.require(:blog_post).permit(:title, :content)
  end
end
